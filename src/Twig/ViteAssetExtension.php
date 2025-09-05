<?php
namespace App\Twig;

use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ViteAssetExtension extends AbstractExtension
{
    private string $manifestPath;
    private ?array $manifest = null;

    public function __construct(KernelInterface $kernel)
    {
        // plus besoin d'injecter un string : on récupère le project dir via le kernel
        $this->manifestPath = $kernel->getProjectDir() . '/public/build/manifest.json';
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('vite_asset', [$this, 'viteAsset']),
            new TwigFunction('vite_css',   [$this, 'viteCss']),
        ];
    }

    public function viteAsset(string $entry): string
    {
        if (($_ENV['APP_ENV'] ?? 'dev') !== 'prod') {
            return 'http://127.0.0.1:5173/' . ltrim($entry, '/');
        }
        $m = $this->manifest();
        if (!isset($m[$entry]['file'])) {
            throw new \RuntimeException("Entrée Vite manquante: $entry");
        }
        return '/build/' . $m[$entry]['file'];
    }

    public function viteCss(string $entry): array
    {
        if (($_ENV['APP_ENV'] ?? 'dev') !== 'prod') return [];
        $m = $this->manifest();
        $css = $m[$entry]['css'] ?? [];
        return array_map(fn($c) => '/build/' . $c, $css);
    }

    private function manifest(): array
    {
        if ($this->manifest !== null) return $this->manifest;
        if (!is_file($this->manifestPath)) {
            throw new \RuntimeException("Vite manifest introuvable: {$this->manifestPath}. Lancez `npm run build`.");
        }
        $this->manifest = json_decode(file_get_contents($this->manifestPath), true, 512, JSON_THROW_ON_ERROR);
        return $this->manifest;
    }
}

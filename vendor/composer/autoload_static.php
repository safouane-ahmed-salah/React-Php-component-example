<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit43873de84ef179b20ea201d506e3d61d
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'React\\Component' => __DIR__ . '/../..' . '/src/React.php',
        'React\\Tag\\App' => __DIR__ . '/../..' . '/src/app.php',
        'React\\Tag\\Card' => __DIR__ . '/../..' . '/src/views/page1.php',
        'React\\Tag\\CodeWrap' => __DIR__ . '/../..' . '/src/components.php',
        'React\\Tag\\Content' => __DIR__ . '/../..' . '/src/components.php',
        'React\\Tag\\DeeperCard' => __DIR__ . '/../..' . '/src/views/page1.php',
        'React\\Tag\\Footer' => __DIR__ . '/../..' . '/src/components.php',
        'React\\Tag\\Head' => __DIR__ . '/../..' . '/src/components.php',
        'React\\Tag\\Header' => __DIR__ . '/../..' . '/src/components.php',
        'React\\Tag\\Home' => __DIR__ . '/../..' . '/src/views/home.php',
        'React\\Tag\\InnerCard' => __DIR__ . '/../..' . '/src/views/page1.php',
        'React\\Tag\\ItemWrapper' => __DIR__ . '/../..' . '/src/views/page2.php',
        'React\\Tag\\ListItems' => __DIR__ . '/../..' . '/src/views/page2.php',
        'React\\Tag\\Page1' => __DIR__ . '/../..' . '/src/views/page1.php',
        'React\\Tag\\Page2' => __DIR__ . '/../..' . '/src/views/page2.php',
        'React\\Tag\\Page3' => __DIR__ . '/../..' . '/src/views/page3.php',
        'React\\Tag\\Route' => __DIR__ . '/../..' . '/src/route.php',
        'React\\Tag\\RouteLink' => __DIR__ . '/../..' . '/src/route.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit43873de84ef179b20ea201d506e3d61d::$classMap;

        }, null, ClassLoader::class);
    }
}

const path = require('path');

module.exports = api => {
    api.cache(true)
    const reactAndTypeScript = {
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "usage",
                    corejs: 3
                }
            ],
            "@babel/preset-typescript",
            "@babel/preset-react",
        ]
    };

    const justJavascript = {
        presets: [
            "@babel/preset-env",
        ]
    }

    const config = {
        env: {
            reactAndTypeScript,
            justJavascript
        }
    }

    return config;
}

export default {
    id: "shummg/MathTrack",
    name: "MathTrack",
    overview: "数学関数を指定して、移動方法を指定できるスクリプト",
    description:
        "y=f(x)の数学関数を指定して、移動方法を指定できるスクリプトです。",
    developer: "しゅう",
    dependencies: ["rikky/rikkyModuleMemory|rikky/rikkyModule2"],
    pageURL: "https://shummg.work/archives/1339",
    downloadURLs: ["https://github.com/shummg/MathTrack/releases"],
    directURL:
        "https://github.com/shummg/MathTrack/releases/download/1.2/MathTrack-1.2.zip",
    latestVersion: "1.2",
    files: [
        { filename: "script/shummg/MathTrack.tra" },
        { filename: "script/shummg/MathTrack.obj" },
        { filename: "script/shummg/MathTrack", isDirectory: true },
    ],
    releases: [
        {
            version: "1.2",
            integrity: {
                archive:
                    "sha384-GMdnbqg2XQaX934Qgj2cjVicQAWTxWj49K6dEWjOhRigSNm9HH3CxmcX9NdJl9EA",
                file: [
                    {
                        target: "script/shummg/MathTrack.tra",
                        hash: "sha384-0jl3ExPEA3wVdMjZbeRIxg/ts/2ABgq8RF22PWZQ8xUmWEJkvs+8iiHTWH3uQkBf",
                    },
                    {
                        target: "script/shummg/MathTrack.obj",
                        hash: "sha384-+7NYZk/pv1ZZ8fIcJCPmeX5g/mYd/0ft2FknwD/3FAYgU2g8K9I2uzabYD7INTLn",
                    },
                    {
                        target: "script/shummg/MathTrack/track00.lua",
                        hash: "sha384-K5fMOBxDsIYRNj0ugq/AznQoo4tY8gSJPi2l3XsNWP5zUsLLtipRWw9a4rIU0ZBD",
                    },
                ],
            },
        },
        {
            version: "1.1",
            integrity: {
                archive:
                    "sha384-Bx9VqWfLDh4yGTIn1UQzAjbjTW5WJGOmwOt4XEeF5HrUXDd7mSw18Oa61JEuRh5v",
                file: [
                    {
                        target: "script/shummg/MathTrack.tra",
                        hash: "sha384-0jl3ExPEA3wVdMjZbeRIxg/ts/2ABgq8RF22PWZQ8xUmWEJkvs+8iiHTWH3uQkBf",
                    },
                    {
                        target: "script/shummg/MathTrack.obj",
                        hash: "sha384-wpnPGu0Yvt1RJvOWDCTFXR5n8yEfHJu1rO7A1dgWQAOgPMTocbwx8JQ32qd9r+um",
                    },
                    {
                        target: "script/shummg/MathTrack/track00.lua",
                        hash: "sha384-K5fMOBxDsIYRNj0ugq/AznQoo4tY8gSJPi2l3XsNWP5zUsLLtipRWw9a4rIU0ZBD",
                    },
                ],
            },
        },
        {
            version: "1.0",
            integrity: {
                archive:
                    "sha384-iaAv0kGDPFQN2bsjvpSQy6hMqdO4ZGWYSHQz/JYrTRD6W90qLtWLS417EJozq6M3",
                file: [
                    {
                        target: "script/shummg/MathTrack.tra",
                        hash: "sha384-0jl3ExPEA3wVdMjZbeRIxg/ts/2ABgq8RF22PWZQ8xUmWEJkvs+8iiHTWH3uQkBf",
                    },
                    {
                        target: "script/shummg/MathTrack.obj",
                        hash: "sha384-5THuAM6cYtleHa5644RVJqDQpePn8h2wV2lkZY71B1EtdiaKRNuL+tYcoRMw6/5B",
                    },
                    {
                        target: "script/shummg/MathTrack/track00.lua",
                        hash: "sha384-K5fMOBxDsIYRNj0ugq/AznQoo4tY8gSJPi2l3XsNWP5zUsLLtipRWw9a4rIU0ZBD",
                    },
                ],
            },
        },
    ],
} as apm.Package;

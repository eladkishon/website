---
title: Enhancing my Webstorm IDE working environment
date: '2022-06-25'
description: 'Using jetbrains-js to generate service Run Configurations...'
---


Do you know the annoying feeling when you need to run a service out of dozens of services you have locally? Ughh…

I was struck by the repetitive task that every developer in our team had to go through in order to run a simple Typescript service from one of our many services with something going wrong either a wrong configuration or a missing environment variable.

Depending on how your team works and manages the configuration of service deployment, I always feared the daunting process of each time figuring out what environment variables are available for configuration in your software, where to get them from and setting them up as a Run Configuration.

I said no more! **_As part of this series_** on how I manage my  
_multi-repo/multi-service_ system more efficiently I set out to solve the manual setup of _Run Configuration_ (specifically for Webstorm but the principle is the same) with all the right environment variables service name etc.

Let us say, for this purpose we have a folder in each of our services called `/deployment-config` containing helm charts with the `values.yaml` and `deployment.yaml`, and assuming we have a function that knows how to process and return an object containing all of environment variables as key-value pairs e.g `envObj = {ENV: ‘prod’, FOO: ‘bar’}`

All we have to do is write a script to register those environment objects as run configuration in our IDE!  
Unfortunaly I did not find a library that lets me add those Run Configurations easily to my IDE.

That’s why I created `[jetbrains-js](https://www.npmjs.com/package/jetbrains-js)` which contains a set of classes to manage Jetbains IDE resources and gives you the ability to add or change them programmatically.

With this library, I can easily take our `envObj` and save a NodeJS (for example purposes) Run Configuration loaded with our environment variables

```
import { WebstormRunConfiguration } from 'jetbrains-js';  
  
WebstormRunConfiguration.saveNodeJsConfig(  
{  
    name: 'example-service',  
    args: \['--some-arg', '--another-arg'\],  
    filePath: '/path/to/my/project/index.js',  
    workingDir: '/path/to/my/project',  
    env: envObj  
})
```

Resulting in a nice Run Configuration that you can directly run:

![](https://miro.medium.com/max/1400/1*8C_jOCd7gddR9djaCG-EBQ.png)Created Run Config

We got what we wanted! I find this very convenient now to confidently manage services and their run configs. Having the ability to tinker while in development, and knowing that you can always go back to a stable and similar setup of what's running in the staging or production environment is something that in my opinion helps substantially cut the development lifecycle from local testing to deployment.

I’d love to know what you think about this guys :) See you on the next chapter of the article series.
        
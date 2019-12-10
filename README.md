# Example project for the [dependency-cruiser issue](https://github.com/sverweij/dependency-cruiser/issues/220)

[dependency-cruiser](https://github.com/sverweij/dependency-cruiser) can not resolve some sass imports.

For sass `@import "_vars.scss"; @import "vars.scss"; @import "vars";` are same imports.
But dependency-cruiser can handle only `@import "_vars.scss";` 

## UPDATE

dependency-cruiser had some issues with Vue [SFC](https://vuejs.org/v2/guide/single-file-components.html). 
This repo contains examples of SFC to check dependency-cruiser work. 

Using [this repo](https://github.com/samteb/vue-2-webpack-4-boilerplate) as a boilerplate.

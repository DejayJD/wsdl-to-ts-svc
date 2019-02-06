export default class Templates {
    public static serviceHeaderTemplate(body:any) {
        return `
        import {Injectable}           from '@angular/core';
        import {BaseService}          from '../base.service';

        @Injectable({
          providedIn: 'root'
        })
        export class ${body.serviceName} extends BaseService {
        private serviceName = "${body.serviceName}";
        constructor() {
            super();
        }
        `;
    }

    public static serviceImportTemplate(body:any) {
        return `import {I${body.methodName}Input, I${body.methodName}Output} from "${body.serviceName}Types"`;
    }
    public static serviceMethodTemplate(body:any) {
        return `
          async ${body.methodName}(params: I${body.methodName}Input): I${body.methodName}Output {
            return await this.soapServiceCall('${body.methodName}', 'GET', params);
          }`;
    }
}

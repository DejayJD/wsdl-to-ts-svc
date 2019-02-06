"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Templates {
    static serviceHeaderTemplate(body) {
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
    static serviceImportTemplate(body) {
        return `import {I${body.methodName}Input, I${body.methodName}Output} from "${body.serviceName}Types"`;
    }
    static serviceMethodTemplate(body) {
        return `
          async ${body.methodName}(params: I${body.methodName}Input): I${body.methodName}Output {
            return await this.soapServiceCall('${body.methodName}', 'GET', params);
          }`;
    }
}
exports.default = Templates;
//# sourceMappingURL=templates.js.map
const fs = require('fs');
const path = require('path');
const t = require('@babel/types');
const {parse} = require('@babel/parser');
const {default: traverse} = require('@babel/traverse');
const {default: generate} = require('@babel/generator');

const PKGS = 'packages';
const emptyLine = '/*hr*/';
const nutMainFile = path.join(__dirname, '../src/nutui.js');
const nutTypings = path.join(__dirname, '../types/nutui.d.ts');

function transformCodes(codes, visitor) {
    const ast = parse(codes, {
        sourceType: "module"
    });
    traverse(ast, visitor);
    const {code} = generate(ast, { /* options */ }, codes);
    return code;
}

function insertImports(pkg) {
    const lowername = pkg.toLowerCase();
    this.insertBefore(
        t.importDeclaration([
            t.importDefaultSpecifier(t.identifier(pkg))
        ], 
        t.stringLiteral(`./packages/${lowername}/index.js`))
    );
    this.insertBefore(
        t.importDeclaration([], t.stringLiteral(`./packages/${lowername}/${lowername}.scss`))
    );
    this.insertBefore(t.stringLiteral(emptyLine));
}

function createProp(pkg) {
    return t.objectProperty(t.identifier(pkg), t.identifier(pkg));
}

function addToExport(pkg, init) {
    init.properties.push(createProp(pkg));
    this.replaceWith(t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier(PKGS), init)
    ]));
}

function addPkgDeclare(pkg) {
    const codes = fs.readFileSync(nutMainFile).toString();
    const visitor = {
        VariableDeclaration: function(p) {
            const {node} = p;//console.log(Object.keys(p.__proto__))
            if(node) {
                const {declarations = []} = node;
                if(declarations.length) {
                    for(const {id, init} of declarations) {
                        
                        if(id.name === PKGS && init.properties && init.properties.length) {
                            const props = init.properties.filter(({key}) => key.name.toLowerCase() === pkg.toLowerCase());
                            if(!props.length) {
                                insertImports.call(p, pkg);
                                addToExport.call(p, pkg, init);
                                p.insertAfter(t.stringLiteral(emptyLine));
                                p.stop();
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    
    const code = transformCodes(codes, visitor);
    return code;
}

function createPkgDeclare(pkg) {
    const code = addPkgDeclare(pkg);
    fs.writeFileSync(nutMainFile, code.replace(/"\/\*hr\*\/"/g, ''));
    fs.appendFileSync(nutTypings, `export declare class ${pkg} extends UIComponent {}\n`);
}

module.exports = createPkgDeclare;
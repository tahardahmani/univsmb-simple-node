const fs = require ("fs")

class fichier {
    constructor(fichier) {
        this.fichier = fichier
    }
    read() {
        let contenu = fs.readFileSync(this.fichier,{encoding:'utf8',flag:'r'})
        console.log(contenu)
        this.affichage()
    }
    write(contenu) {
        fs.writeFileSync(this.fichier,contenu)

    }
    delete() {

    }
    affichage(){

        console.log("Mon contenu : \n" + this.contenu)

    }


}

let monfichier = new fichier('myfile.txt')
monfichier.read()
monfichier.affichage()
monfichier.write('blabla')

import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)
    const promesa = jsonfile.readFile(__dirname + "/contacts.json").then((c) => {
      this.data = c;
      console.log({ c });
    });
    return promesa
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
    // jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
    return jsonfile.writeFile(__dirname+ '/contacts.json', this.data)
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
// function main(){
//   const contactNew = new ContactsCollection;
//   contactNew.load()
//   const newContact = new Contact;
//   newContact.id= 4;
//   newContact.name= 'LEJOS LEJOS LEJOS'
//   const newContact2 = new Contact;
//   newContact2.id= 5;
//   newContact2.name= 'lseonldibLEJOS LEJOS LEJOS'
//   contactNew.addOne(newContact);
//   contactNew.addOne(newContact2);
//   contactNew.save()
// }

// main()
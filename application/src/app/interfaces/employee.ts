export class order {
    constructor(
      public itemName: string = '',
      public unitPrice: number = 0,
      public units: number = 0,
      public unitTotalPrice: number = 0,
    ) {}
  }
  
  export class competenze {
    constructor(
      public nomeCompetenza: string = '',
      public nomeMansione: string = '',
      public nomeCommittente: string = '',
      public richiestaAbilitazione: number = 0,
      public nomeAbilitazione: string = '',
      public voto: number = 0,
    ) {}
  }
  
  export class mansioni {
    constructor(
      public nomeMansione: string = '',
      public nomeCommittente: string = '',
    ) {}
  }
  
  export class jobHistory {
    constructor(
      public committente: string = '',
      public dataInizio: Date = new Date(),
      public dataFine: Date = new Date(),
      public risultato: number = 0,
    ) {}
  }
  
  export class corsi {
    constructor(
      public nomeCorso: string = '',
      public dataCorso:  Date = new Date(),
      public scadenzaAttestato: Date = new Date(),
      public esito: number = 0,
    ) {}
  }
  
  export class visite {
    constructor(
      public visita: string[],
      public dataVisita:  Date = new Date(),
      public scadenzaVisita: Date = new Date(),
      public esito: number = 0,
      public prescrizioni: string = '',
    ) {}
  }
  
  export class citta {
    constructor(
      public indirizzo: string = '',
      public numeroCivico: string = '',
      public citta: string = '',
      public provincia: string = '',
      public cap: string = '',
    ) {}
  }
  
  export class patenti {
    constructor(
      public patente: string = '',
    ) {}
  }
  
  export class telefoni {
    constructor(
      public telefono: string = '',
    ) {}
  }
  
  export class email {
    constructor(
      public email: string = '',
    ) {}
  }
  
  export class conti {
    constructor(
      public banca: string = '',
      public conto: string = '',
      public preferito: number = 0,
    ) {}
  }
  
  export class quoteSociali {
    constructor(
      public importo: number = 0,
      public dataVersamento: Date = new Date(),
      public restituita: number = 0,
    ) {}
  }
  
  export class documenti {
    constructor(
      public nomeDocumento: string = '',
      public tipoDocumento: number = 0,
    ) {}
  }
  
  export class abilitazioni {
    constructor(
      public nomeAbilitazione: string = '',
      public dataAbilitazione: Date = new Date(),
    ) {}
  }
  
  export class limitazioni {
    constructor(
      public nomeLimitazione: string = '',
      public limitazioneDal: Date = new Date(),
      public limitazioneAl: Date = new Date(),
    ) {}
  }
  
  export class EmployeeList {
    constructor(
      public id: number = 0,
      public billFrom: string = '',
      public billFromEmail: string = '',
      public billFromAddress: string = '',
      public billFromPhone: number = 0,
      public billFromFax: number = 0,
      public billTo: string = '',
      public billToEmail: string = '',
      public billToAddress: string = '',
      public billToPhone: number = 0,
      public billToFax: number = 0,
      public orders: order[] = [],
      public orderDate: Date = new Date(),
      public totalCost: number = 0,
      public vat: number = 0,
      public grandTotal: number = 0,
      public status: string = '',
      public completed: boolean = false,
      public isSelected: boolean = false,
  
      public imagePath: string = '',
      public nome: string = '',
      public cognome: string = '',
      public codiceFiscale: string = '',
      public sesso: number = 0,
      public dataContatto: Date = new Date(),
      public dataAssunzione: Date = new Date(),
      public citta: citta[] = [],
      public dataNascita: Date = new Date(),
      public luogoNascita: string = '',
      public provinciaNascita: string = '',
      public nazionalita: string = '',
      public permessoSoggiorno: number = 0,
      public statoCivile: string ='',
      public titoloStudio: number = 0,
      public autoMunito: number = 0,
      public patenti: patenti[] = [],
      public email: email[] = [],
      public cellulare: string = '',
      public telefoni: telefoni[] = [],
      public availability: number = 0,
      public competenze: competenze[] = [],
      public mansioni: mansioni[] = [],
      public jobHistory: jobHistory[] = [],
      public corsi: corsi[] = [],
      public visite: visite[] = [],
      public conti: conti[] = [],
      public quoteSociali: quoteSociali[] = [],
      public documenti: documenti[] = [],
      public abilitazioni: abilitazioni[] = [],
      public limitazioni: limitazioni[] = [],
      public note: string = '',
      public supervisore: string = '',
    ) {}
  }
  
  export class CompetenzaList {
    constructor(
      public id: number = 0,
      public nomeCompetenza: string = '',
    ){}
  }
  
  export class MansioneList {
    constructor(
      public id: number = 0,
      public nomeMansione: string = '',
    ){}
  }
  
  export class ListaQuote {
    constructor(
      public id: number = 0,
      public idLavoratore: number = 0,
      public importo: number = 0,
      public dataVersamento: Date = new Date(),
      public restituita: number = 0,
    ){}
  }
  
  export class SupervisorEmployees {
    constructor(
      public id: number = 0,
      public nome: string = '',
      public cognome: string = '',
    ){}
  }
  
  export interface DataResponse<T> {
    data: T;
    total: T;
    success: boolean;
  }
  
  export interface NewWorker {
    id: number;
    email: string;
    password: string;
  }
  
  export interface Workers {
    id_user: number;
    id_supervisore: number;
    userdata: WorkersData;
    superuser: Supervisor;
  }
  
  export interface WorkersTotal {
    totalWorkers: number;
  }
  
  export interface WorkersData {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    cellulare: string;
    livello: number;
    id_tenant: number;
  }
  
  export interface NewWorkersData {
    id?: number;
    nome: string;
    cognome: string;
    email: string;
    cellulare: string;
    livello: number;
    id_tenant: number;
  }
  
  export interface WorkerAddress {
    id: number;
    indirizzo: string;
    citta: string;
    cap: string;
    id_provincia: number;
  }
  
  export interface WorkerPhones {
    id: number;
    tipo: string;
    telefono: string;
  }
  
  export interface WorkerEmails {
    id: number;
    email: string;
  }
  
  export interface WorkerCivilState {
    id: number;
    stato_civile: string;
  }
  
  export interface Supervisor {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    cellulare: string;
  }
  
  export interface WorkerDetail {
    id: number;
    codice_fiscale: string;
    sesso: number;
    data_nascita: string;
    luogo_nascita: string;
    id_provincia_nascita: number;
    nazionalita: string;
    permesso_di_soggiorno: number;
    stato_civile: number;
    titolo_di_studio: number;
    automunito: number;
    posizione_inps: string;
    posizione_inail: string;
    libro_matricola: string;
    decontribuzione: string;
    note: string;
    userdata: WorkersData;
    address: WorkerAddress[];
    phones: WorkerPhones[];
    emails: WorkerEmails[];
    civil_state: WorkerCivilState[];
  }
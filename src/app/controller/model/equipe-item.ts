import { Stagiaire } from './stagiaire';
import { Stage } from './stage';
export class EquipeItem {

    public id:number;
    dateDebut:Date;
    dateFin:Date;
    emCv:String;
    dateRecuCv:String;
    note:number;
    stagiaire:Stagiaire;
    stage:Stage;

    public constructor(){
        
    }

}
/*private Long id;
	
	@ManyToOne
	private Stagiaire stagiaire;
	
	private Date dateDebut;
	
	private Date dateFin;
	
	private String emCv;
	
	private Date dateRecuCv;
	
	private double note;
	
	@ManyToOne
	private Stage stage;*/
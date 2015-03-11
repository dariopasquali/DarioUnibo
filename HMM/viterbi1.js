/*
*********************************
prova 1 dell'algoritmo di viterbi bastato sull'Hidden Markon Model

Supponiamo di avere un villaggio i cui abitanti
sono "Sano" o "Malato" ---> Stati possibili

l'unico modo per sapere il loro stato giornaliero è chiederlo al dottore del paese.

Il dottore, per sapere lo stato del paziente,
si basa su come si sente il paziente.
esso può essere "Normale", "Freddo" o "Male" ---> Osservazioni possibili

Supponiamo che inizialmente il paziente abbia una certa probabilità di essere
Sano = 0.6		Malato = 0.4 ---> Stato iniziale

Ogni giorno lo stato del paziente può cambiare,
il cambiamento dipende solo dal giorno precedente.
In particolare: (Se oggi sono ---> Domani sarò)
Sano ---> Sano=0.7 Malato=0.3
Malato ---> Sano=0.4 Malato=0.6

Inoltre il medico sa che (Se sono ---> Mi sento)
Sano ---> Normale=0.5 Freddo=0.4 Male=0.1
Malato ---> Normale=0.1 Freddo=0.3 Male = 0.6

Suppongo che il paziente vada 3 giorni di fila
1 -> Normale
2 -> Freddo
3 -> Male

Qual'è la più probabile sequenza di stati che hanno portato queste osservazioni????
*********************************
*/

var viterbi = {

	startP : null,
	states : null,
	transP : null,
	emitP : null,
	obsSeq : null,
	emit : null,

	Viterbi : function (startP, transP, emitP, states, emit){

		this.startP = startP;
		this.transP = transP;
		this.emitP = emitP;
		this.states = states;
		this.emit = emit;		
	},

	getStateSeq : function(obsSeq)
	{
		this.obsSeq = obsSeq;
		var P = [{}];	//array di probabilità
		var path = {};	//path rilevato

		//Suppongo che il primo giorno il paziente si senta Normale
		for(var s=0; s<states.length; s++)
		{
			var stato = states[s];
			P[0][stato] = startP[stato] * emitP[stato][obsSeq[0]];
			path[stato] = [stato];			
		}

		//Quindi lavoro per i giorni successivi
		for(var o=1; o<obsSeq.length; o++) //Per tutte le osservazioni rilevate
		{
			P.push({}); //aggiunge un nuovo elemento all'array di probabilità
			var newPath = {};

			for(var s=0; s<states.length; s++) //Per ogni in cui posso andare
			{
				var nextState = states[s];
				var max = [0, null];

				for(var s1=0; s1<states.length; s1++) //Per ogni stato in cui sono
				{
					var stato = states[s1];

					var prob = P[o-1][stato] *	//Prob dello stato da cui arrivo
								transP[stato][nextState] *	//Prob di transizione nel prossimo stato
								emitP[nextState][obsSeq[o]];	//Prob di generare l'osservazione rilevata con il prossimo stato
					if(prob > max[0])
					{
						max[0] = prob;
						max[1] = stato;
					}					
				}

				P[o][nextState] = max[0];
				newPath[nextState] = path[max[1]].concat(nextState);


				//console.log(P[o][nextState]+"\n"+newPath[nextState]);
			}
			path = newPath;
		}


		var max = [0, null];
		for(var s=0; s<states.length; s++) //Per tutti i possibili stati
		{
			//prendo la maggior probabilità calcolata prima
			//per quello stato

			var stato = states[s];
			var prob = P[obsSeq.length-1][stato];
			if(prob>max[0])
			{
				max = [prob, stato];
			}

			//console.log(max);
		}

		console.log(path[max[1]]);

		return[max[0], path[max[1]]];
	}
};

var states = ["Sano", "Malato"];
var emit = ["Normale", "Freddo", "Male"];

var startP = {
	"Sano" : 0.6,
	"Malato" : 0.4
};

var emitP = {
	"Sano" : {"Normale":0.5, "Freddo":0.4, "Male":0.1},
	"Malato" : {"Normale":0.1, "Freddo":0.3, "Male":0.6}
};

var transP = {
	"Sano" : {"Sano":0.7, "Malato":0.3},
	"Malato" : {"Sano":0.4, "Malato":0.6}
};

var obsSeq = ["Normale", "Freddo", "Male"];

viterbi.Viterbi(startP, transP, emitP, states, emit);
var res = viterbi.getStateSeq(obsSeq);
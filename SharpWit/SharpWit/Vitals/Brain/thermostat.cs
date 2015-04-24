using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharpWit.Vitals.Brain
{
    class thermostat
    {
        private Objects.O_NLP.RootObject o_NLP = new Objects.O_NLP.RootObject();
        double conf = 0D;
        double temperature = 0D;

        public string doSomething(Objects.O_NLP.RootObject _o_NLP)
        {
            try
            {
                // Bind to the wit.ai NLP response class
                o_NLP = _o_NLP;
                conf = (o_NLP.outcome.confidence * 100);
                temperature = o_NLP.outcome.entities.target_temperature[0].value;
                

                string sentence = "";

                sentence += "Hello! I'm " + conf.ToString() + "% sure you change my temperature.";
                sentence += "\nWooooooW hai impostato la temperatura a " + temperature + " gradi!!!!!!";
               

                return sentence;
            }
            catch (Exception ex)
            {
                return "Uh oh, something went wrong: " + ex.Message;
            }
        }

    }
}

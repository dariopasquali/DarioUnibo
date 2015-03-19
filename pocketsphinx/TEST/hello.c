#include "header/pocketsphinx.h"
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>


#define MODELDIR "C:/Users/Gabri/Desktop/Sphinx/pocketsphinx-5prealpha-win32/model"

int main (int argc, char** argv)
{
	ps_decoder_t *ps;
	cmd_ln_t *config;
	int rv;
	int32 score;
	int16 buff[512];
	char *hyp, *uttid;
	FILE *fh;

	config = cmd_ln_init(NULL, ps_args(), TRUE,
			     "-hmm", MODELDIR "/en-us/en-us",
			     "-lm", MODELDIR "/en-us/en-us.lm.dmp",
			     "-dict", MODELDIR "/en-us/cmudict-en-us.dict",
			     NULL);
    if (config == NULL)
		return 1;

	ps = ps_init(config);
	if(ps == NULL)
		return 1;

	fh = fopen("goforward.raw", "rb");
	if (fh == NULL)
	    return -1;

	rv = ps_start_utt(ps);
	if(rv<0)
		return 1;

	while(!feof(fh))
	{
		size_t nsamp;
		nsamp = fread(buff, 2, 512, fh);
		rv = ps_process_raw(ps, buf, nsamp, FALSE, FALSE);
	}

	 rv = ps_end_utt(ps);
     if (rv < 0)
		return 1;

	hyp = ps_get_hyp(ps, &score);
	if (hyp == NULL)
		return 1;
	printf("Recognized: %s\n", hyp);

	fclose(fh);
    ps_free(ps);
    cmd_ln_free_r(config);

    return 0;


}
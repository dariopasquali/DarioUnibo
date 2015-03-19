#include "pocketsphinx.h"
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <windows.h>


#define MODELDIR "C:/Users/Gabri/Desktop/Sphinx/pocketsphinx-5prealpha-win32/model"

int main (int argc, char** argv)
{
	ps_decoder_t *ps;
	cmd_ln_t *config;
	int rv;
	int32 score;
	int16 buf[512];
	char const *hyp, *uttid;
	FILE *fh;
	SYSTEMTIME start, end ,diff;	
	
	printf("INIT -----------------------------------------\n");

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


	char s[256];
	printf("\nFile name?\n");

	while(gets(s)) //---------------------------------- decoding loop -----------
	{
		GetSystemTime(&start);

		fh = fopen(s, "rb");
		if (fh == NULL)
		{
			printf("\nImpossibile leggere il file di input\n");
			return -1;
		}

		rv = ps_start_utt(ps);
		if(rv<0)
			return 1;

		printf("\n\nSTART READING FILE!!!! --------------------------------\n\n");

		while(!feof(fh))
		{
			size_t nsamp;
			nsamp = fread(buf, 2, 512, fh);
			rv = ps_process_raw(ps, buf, nsamp, FALSE, FALSE);
		}

		 rv = ps_end_utt(ps);
		 if (rv < 0)
			return 1;

		hyp = ps_get_hyp(ps, &score);
		if (hyp == NULL)
			return 1;
		
		GetSystemTime(&end);
		
		printf("\n\nEND!!!! --------------------------------\n\n");
		
		printf("Recognized: %s\n\n\n", hyp);

		diff.wSecond = end.wSecond - start.wSecond;
		diff.wMilliseconds = end.wMilliseconds - start.wMilliseconds;

		diff.wMilliseconds = diff.wMilliseconds + diff.wSecond*1000;
		printf("Duration mills: %02d\n", diff.wMilliseconds);
		
		printf("File name?\n");
	}
	
	

	fclose(fh);
    ps_free(ps);
    cmd_ln_free_r(config);

	

    return 0;


}
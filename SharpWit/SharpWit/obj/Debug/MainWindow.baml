   M S B A M L   `   `   `  ����  SharpWit    SharpWit.MainWindow   5   	   \ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$,  &SharpWit - wit.ai language interpreter��5   	   $��586.013��68   $��467.006��6I    � WindowStartupLocation$ CenterScreen=�6Y    � 
ResizeMode$ NoResize=�6~   .��5      � .+�5   
   �� $D��>Type a sentence and press [enter], and I will try to parse it.��6   $
��Left=�6Y   $��	34,10,0,0q�6t   $	��Top=�6�   $
��Bold"�6�   �� 5   
   $
��You:��6   $
��Left=�6   $��	34,71,0,0q�6:   $	��Top=�6M   �� 5   
   -   5         ��Name$ tbYou��5      $
��Left=�6!   $��41��6<   $��	93,75,0,0q�6H    �� TextWrapping$
 Wrap=�6[   $�� ��6o   $	��Top=�6w   $	��340��6�    �� 	MaxLength$	 255��6�   �� 5	   
   $��I:��6   $
��Left=�6   $��
49,184,0,0q�68   $	��Top=�6L   �� 5
   
   -   5        $ tbRaw��5
      $
��Left=�6!   $	��167��6<   $��
95,334,0,0q�6I   $
 Wrap=�6]   $�� ��6q   $	��Top=�6y   $	��340��6�   " �� VerticalScrollBarVisibility$ Visible=�6�   �� 5   
   $
��Raw:��6   $
��Left=�6   $��
34,334,0,0q�6:   $	��Top=�6N   �� 5   
   -   5        $	 tbI��5      $
��Left=�6   $	��125��6:   $��
95,184,0,0q�6G   $
 Wrap=�6[   $�� ��6o   $	��Top=�6w   $	��340��6�   �� 5   
   -   5         ��Name$ lblYou��5      $�� ��6    $
��Left=�6+   $��49��6F   $��
93,121,0,0q�6R   $	��Top=�6f   $	��338��6~   $
��Auto=�6�   �� 5   
   $4��.Developed by Sam Kraaijveld, powered by wit.ai��6   $
��Left=�6I   $��
19,513,0,0q�6d   $	��Top=�6x   $��10(�6�   �� 5   
   -   5         ��Name$ btnShutdown��5      $
��Exit��6&   $
��Left=�65   $��311,514,0,0q�6P   $	��Top=�6e   $	��122��6}   6�   �� 5   
   $1��+Alternatively, click here to record speech:��6   $
��Left=�6F   $��	34,36,0,0q�6a   $	��Top=�6t   $
��Bold"�6�   �� 5   
   -   5        $ 	btnRecord��5      $��record��6$   $
��Left=�65   $��
299,42,0,0q�6P   $	��Top=�6d   $	��132��6|   6�   5      5      
# jellyfin-fanartbackground
A simple yet effective way to add a refreshing background on the jellyfin login page

# Installation
Simply download this as a zip file (or grab the files manually it will do the same) and place them in your jellyfin/web directory (mine on linux is /usr/share/jellyfin/web/) so the final result for all the files would be /usr/share/jellywin/web/fanart

Once unzipped add the following to the end of your index.html file (just before the final </body> tag

    <script src="fanart/cssbuster.js"></script>

Then simply refresh the page if you still have issues clear your cache

# Modifications
You can change all images by replacing the .jpg in fanart folder

If you want more or less images in rotation modify the cssbuster.js with a text editor (this will be pretty self explanatory when you see the file)

# known issues 
Not all images work well on mobile phones (some vertical displays)

# Screenshots
each reload of the web page will grant a random background from your folder of fanart (can be replaced with any images you want, increased or decreased).
![Capture](https://user-images.githubusercontent.com/23018412/114848291-75cf1580-9dd6-11eb-982c-02c1829785aa.PNG)
after a reload
![Capture2](https://user-images.githubusercontent.com/23018412/114848300-78ca0600-9dd6-11eb-8120-174a7d22f3ab.PNG)
after a reload
![Capture3](https://user-images.githubusercontent.com/23018412/114848306-79fb3300-9dd6-11eb-8880-ecdba1b47650.PNG)
there are more but i would be here forever if that was my goal to screen cap all of them.

# jellyfin-fanartbackground
A simple yet effective way to add a refreshing background on the jellyfin login page

# Installation

    cd /usr/share/jellyfin/web
    sudo wget https://github.com/BobHasNoSoul/jellyfin-fanartbackground/archive/refs/heads/main.zip -o fanart.zip
    sudo unzip fanart.zip
    
Once unzipped add the following to the end of your index.html file using `sudo nano index.html` (and insert the following just before the final </body> tag

    <script src="jellyfin-fanartbackground-main/cssbuster.js"></script>

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

'use strict';

        var ROOT_ALBUM_DIR = 'assets/album-covers';

        // list all the img names that you want to be albums
        var albumImages = [
            { path: "img001.png", title: "Fishermans Wharf", url: "albums/pier39/index.html" },
            { path: "img002.png", title: "Chinatown", url: "albums/chinatown/index.html" },
            { path: "img003.png", title: "Lombard Street", url: "albums/lombardstreet/index.html" },
            { path: "img004.png", title: "Alcatraz", url: "albums/alcatraz/index.html" },
            { path: "img005.png", title: "Cable Cars", url: "albums/cablecars/index.html" },
            { path: "img006.png", title: "Coit Tower", url: "albums/coittower/index.html" },
            { path: "img007.png", title: "Twin Peaks", url: "albums/twinpeaks/index.html" },
            { path: "img008.png", title: "Golden Gate Park", url: "albums/goldengatepark/index.html" }
            // copy/paste each `{ ... }` for as many albums as you have
            // Don't forget to have a comma after each `{ ... }` (except the last one!)
        ];

        // This following code is run when the page is loaded
        $(document).ready(function() {
            // add the id of the `<div>` container that will hold
            // all of the album cover images below inside `$('')`
            // Remember: to select classes, start with a `.`
            // to select IDs, start with a `#`
            var $albumRow = $('#albumRow'); 

            // Create a new photo album object and give it the HTML
            // element that all albums cover `<img>` tags should be in
            // and a root directory for where the album cover images live
            var albums = AlbumFactory($albumRow, ROOT_ALBUM_DIR);

            // Load the album images!
            albums.loadImages(albumImages);

        });

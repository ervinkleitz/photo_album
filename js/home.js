'use strict';

        var ROOT_ALBUM_DIR = 'assets/album-covers';

        // list all the img names that you want to be albums
        var albumImages = [
            { path: "img001.png", title: "Pier 39", url: "albums/pier39" },
            { path: "img002.png", title: "Chinatown", url: "assets/album-covers/img002.png" },
            { path: "img003.png", title: "Lombard Street", url: "assets/album-covers/img003.png" },
            { path: "img004.png", title: "Alcatraz", url: "assets/album-covers/img004.png" },
            { path: "img005.png", title: "Cable Cars", url: "assets/album-covers/img005.png" },
            { path: "img006.png", title: "Coit Tower", url: "assets/album-covers/img006.png" },
            { path: "img007.png", title: "Twin Peaks", url: "assets/album-covers/img007.png" },
            { path: "img008.png", title: "Golden Gate Park", url: "assets/album-covers/img008.png" }
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

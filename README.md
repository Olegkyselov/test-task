# City Scour Test Task

In this test task you will replicate the tiles functionality of the City Scour home screen. A tile is a UI element on the home screen which displays information about either an article or a 'scour'. It displays the name of the article or scour and a thumbnail, and changes color based on the type of tile it is (article or scour). The desired appearance of the tiles are shown in the mock-up below.

![Home Screen Mock-Up](https://raw.githubusercontent.com/cityscour/test-task/master/home-screen.jpg)

Please complete the following:

- Create a new component (and file) named `Tile`
  - It should take the following props:
    - `name: string` - the name of the tile.
    - `isArticle: boolean` - whether the tile is an article
    - `thumbnail: string` - URL to the thumbnail image
  - And render the tile using the props so that it looks as close to the mock-up as possible. Please note:
    - The tile should display the text passed in by `name` (not 'Scour' or 'Article' as shown in the mock-up)
    - The border of the tile should be orange or blue depending on the type of tile (see mock-up)
    - You can ignore the icon in the top right of every tile in the mock-up
- In `App.tsx` render a `Tile` for every item in the `data` array, passing in the appropriate props.

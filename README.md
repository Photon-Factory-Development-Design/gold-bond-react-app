# Gold Bond AWS Product Selector App

This project was built by React and deployed to AWS Ads pages. 

## How to deploy this app? 
1. Run npm run in currenet package. 
```
npm run build
```
2. Please push code changes including /build directory to github and create branch/tag to represents version of your code change.
![image](https://user-images.githubusercontent.com/49565243/144799406-223ca9f7-2925-466c-b187-0fdb009a3657.png)
![image](https://user-images.githubusercontent.com/49565243/144799477-e1972d82-7574-4d35-b8be-1c5e89f7272d.png)
3. In AWS Ads admin page, please create Free Form to import your code that you've built.
![image](https://user-images.githubusercontent.com/49565243/144799614-baec5710-1aa7-4bdf-95af-b72a824b7c83.png)
- At the very top free form, please add this code. 
```
<script>
window.CB = {}
</script>
```
- Add CSS styles  
e.g.
```
<link href="https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/gold-bond-react-app@1.3.7/build/static/css/main.css" rel="stylesheet" />
```
>Note: In the above example, `https://cdn.jsdelivr.net/gh/` is a Github CDN server URL. `Photon-Factory-Development-Design` is a Organization/Owner name. `gold-bond-react-app@1.3.7` is a repository name and version name that you added. `build/static/css/main.css` is the path to css file.
- Add JS code
e.g.
```
<script src="https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/gold-bond-react-app@1.3.7/build/static/js/main.js"></script>
```
>Note: In the above example, `https://cdn.jsdelivr.net/gh/` is a Github CDN server URL. `Photon-Factory-Development-Design` is a Organization/Owner name. `gold-bond-react-app@1.3.7` is a repository name and version name that you added. `build/static/js/main.js` is the path to js file.
- Add Amazon style sheets
```
<link href="https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/gold-bond-react-app@1.3.7/public/styles.css" rel="stylesheet" />
```
This is essential to match styles to AWS texts, rating stars, buttons etc. 
- Add HTML element to render product selector
```
<div id="root"></div>
```
>Note: The id name shoud be matched that you used in JS code. default is `root`. 

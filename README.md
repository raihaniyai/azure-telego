# Telego
Telego is a Telco app that utilises a new revenue model as direct payment and promotion gateway for OTT platforms and other (5G) service providers by integrating their products into one, Telco-owned platform.

Access Telego here: https://telego.azurewebsites.net/

## Inspiration
One of our team members, who has been following the telecommunications industry, has long noticed how the cannibalisation of Telcos by OTT services still persists in the past few years. After working at a gaming company, he was introduced to the idea of payment channels, which then sparked a thought: 
Due to the feasibility of integration and the huge amount of data owned, Telcos may be the _perfect entity_ to serve as the largest payment gateway for OTT, or any other service providers.

Additionally, looking at the low non-telco payment channel adoption in developing countries including Indonesia, we see that Telcos can position themselves as the bridge between people living in rural areas and digital services offered by service providers. 

Now, as we face the upcoming wave of 5G, we should expect to encounter a variety of new services and use cases of connectivity other than OTT. With the ultimate payment gateway proposition, Telcos can also easily **tap into the new 5G market** and **gain new revenue stream** by establihing a centralised platform that sells an extensive range of connectivity-related services or smart devices according to the 5G demand. 

This way, revenue stream will be correlated with products and services sales. Hence, profitability will be ensured and expected to be more sustainable (considering the current demand and forecasted growing demand).

This is how we came up with [Telego](https://telego.azurewebsites.net/) as our solution to the problem faced by the telecommunications industry.

## Main features
* **All-in-one** - Telego allows users to browse various digital services and their related hardwares via only one, compact platform
* **Easy transaction** - Telego allows users to make payment directly through the app with Telego credits
* **Win-win solution** - Telego offers targeted, personalised deals to users while also allowing service providers to push promotions manually to their preferred target customers
* **Stay informed** - Telego hosts a tech-focused news client for users to stay up-to-date with the latest innovations in the 5G era

## UI design

<br>

<img width="45%" src="https://github.com/clchinara/media-repo/blob/master/telego/home.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="45%" src="https://github.com/clchinara/media-repo/blob/master/telego/sample-company.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br>

<img width="45%" src="https://github.com/clchinara/media-repo/blob/master/telego/streaming.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="45%" src="https://github.com/clchinara/media-repo/blob/master/telego/sample-plan.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br>

<img width="45%" src="https://github.com/clchinara/media-repo/blob/master/telego/explore.png">
<br>

## Tech stack
* Client-side framework: **ReactJS**
* Server-side framework: **ExpressJS**
* Database: **PostgreSQL**
* Recommendation system: **Azure Cognitive Services - Personalizer**
* CI/CD: **Azure DevOps**
* Hosting: **Azure App Service**
* Miscellaneous: **Bing News Search**

<img src="https://github.com/clchinara/media-repo/blob/master/telego/app-architecture.png">

## General system architecture
<img src="https://github.com/clchinara/media-repo/blob/master/telego/sys-architecture.png">

## How we built Telego
Below is a rough breakdown of Telego's development process: 
1. Design the app's UI/UX on [Figma](https://www.figma.com/file/nyUci7p9Vk6ygFzgxDmyol/not-samsan-tech?node-id=0%3A1)
2. Set up Azure App Service on Azure Portal to host client-side and server-side
3. Build pipelines on Azure DevOps to automate the deployment process every time a commit is pushed
4. Implement the app's components according to the design defined in the Figma project
5. Create Azure Database for PostgreSQL Server in Azure Portal
6. Connect server-side to PostgreSQL database
7. Set up Azure Cognitive Services in Azure Portal in order to use Personalizer and Bing News API
8. Connect server-side to Personalizer and Bing News Search API
9. Connect client-side to server-side through the developed APIs

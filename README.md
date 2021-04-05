# Telego
Telego is a Telco app that utilises a new revenue model as direct payment and promotion gateway for OTT platforms and other (5G) service providers by integrating their products into one, Telco-owned platform.

Access Telego here: https://telego.azurewebsites.net/

## Inspiration
One of our team members, who has been following the telecommunications industry, has long noticed how the cannibalisation of Telcos by OTT services still persists in the past few years. After working at a gaming company, he was introduced to the idea of payment channels, which then sparked a thought: 

Taking into account the feasibility of integration and the huge amount of data owned, Telcos may be the _perfect entity_ to serve as the largest payment gateway for OTT, or any other applicable service providers.

Additionally, judging from the low non-telco payment channel adoption in developing countries including Indonesia, we see that Telcos have the chance to position themselves as the pioneer in bridging people, especially those living in rural areas, to the digital services offered by service providers. 

Now, as we face the upcoming wave of 5G, it is a given that we are going to encounter a great number of new services or use cases of connectivity other than OTT. We strongly believe that with the ultimate payment gateway proposition, not only will Telcos escape from its vicious circle of unprofitability, they will also be able to easily **tap into the new 5G market** and **gain new revenue streams** by offering a direct payment method, as well as a centralised platform that sells an extensive range of connectivity-related services. 

This way, revenue streams will be **positively correlated** with products and services sales. Hence, profitability will be ensured and expected to be more sustainable (considering the current demand and forecasted growing demand).

This is how we came up with [Telego](https://telego.azurewebsites.net/) as our solution to the problem faced by the telecommunications industry.

## Main features
* **All-in-one** - Telego allows users to browse various digital services and their related hardwares via only one, compact platform
* **Easy transaction** - Telego allows users to make payment directly through the app with Telego credits
* **Win-win solution** - Telego offers targeted, personalised deals to users while also allowing service providers to push promotions manually to their preferred target customers
* **Stay informed** - Telego hosts a tech-focused news client for users to stay up-to-date with the latest innovations in the 5G era

## UI design

<br>

<img width="30%" src="https://github.com/clchinara/media-repo/blob/master/telego/home.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="30%" src="https://github.com/clchinara/media-repo/blob/master/telego/sample-company.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="30%" src="https://github.com/clchinara/media-repo/blob/master/telego/sample-plan.png">
<br>

<img width="30%" src="https://github.com/clchinara/media-repo/blob/master/telego/streaming.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="30%" src="https://github.com/clchinara/media-repo/blob/master/telego/explore.png">
<br>

See previous designs [here](https://www.figma.com/file/nyUci7p9Vk6ygFzgxDmyol/not-samsan-tech?node-id=0%3A1).

## General system architecture
<img src="https://github.com/clchinara/media-repo/blob/master/telego/sys-architecture.png">

## Tech stack
* Client-side framework: **ReactJS**
* Server-side framework: **ExpressJS**
* Database: **PostgreSQL**
* Recommendation system: **Azure Cognitive Services - Personalizer**
* CI/CD: **Azure DevOps**
* Hosting: **Azure App Service**
* Miscellaneous: **Bing News Search**

<img src="https://github.com/clchinara/media-repo/blob/master/telego/app-architecture.png">

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

# azure-telego
Telego app could be access here: https://telego.azurewebsites.net/

## Inspiration:
One of our team members has been following Telco industry and did various studies on the industry as the OTT cannibalising Telco issues has been going on for the few years. After working at a gaming company, he realised that payment channel is a thing and Telco can be the perfect entity to be the biggest payment gateway for OTTs due to the integration feasibility and huge amount of data owned.

Additionally, looking at the low non-telco payment channel adoption in developing countries, including Indonesia, we see that Telco can position themselves as the bridge for those individuals living in rural area and digital services offered by OTT

Facing the upcoming wave of 5G, we can see how more and more individuals will own smart devices that utilise such network. Hence, with the ultimate payment gateway proposition, Telco can easily tap to that new market too by offering direct purchase of those devices through the Telco app

This way, revenue stream will be correlated with product and services sales. Hence, profitability will be ensured and expected to be more sustainable (considering the current demand and forecasted growing demand)

This is how we came up with Telego as our idea to solve the problem statement faced by Telco

## What it does:
1.	Allow users to purchase various digital services and tech-related hardware through the telco app with their telco credit
2.	Offer targeted personalised deals for user (allow services provider to push the deals manually too to their preferred target audience)
3.	Free tech news update for the users

## How we built it
These are our journey to build the Telego app:
1. We designed the UI/UX component in [Our Project on Figma](https://www.figma.com/file/nyUci7p9Vk6ygFzgxDmyol/not-samsan-tech?node-id=0%3A1)
2. Create web app services on Azure Portal for the client-side and the server-side
3. Build pipeline on the Azure Devops to automate the deployment process once we push a commit
4. Implement the component design which already defined in our project on Figma
5. Create prostgesql in Azure Portal as our storage
6. Connect the server-side to the database (postgresql)
7. Create Cognitive Services in Azure Portal in order to use Bing News API
8. Connect the server-side to the Bing News Search API
9. Connect the client-side to the server-side through the developed API

## Tech stack used
1. React JS as the framework for client-side
2. Express JS as the framework for server-side
3. Postgresql as our Database
4. Azure Web App Services to host our client-side and server-side
5. Bing News Search API
6. Azure Devops to build pipeline and automate the deployment process

# Welcome to My Project Milestone 1

## INTRODUCTION

This week, the project milestone is to create a company profile page using HTML and CSS, ensure responsive design across different screen devices, and deploy it to a custom domain.

## SKILL SET

- ✅Semantic HTML
- ✅Documentaion
- ✅Responsive Design
- ✅Deployment

## TOOLS 🛠

- HTML
- CSS
- Javascript
- Internal Sources
  ⁕ Images
- External Sources
  ⁕ Icons

## DETAILS

**Bobi Craft** is a place where you can find any kind of crocheted thing, like dolls, keychains, socks, etc. You can also find crochet tools here. If you are a beginner at crocheting, you can also join workshops.

## Media Query

I made 3 types of media queries: laptop, tablet, and mobile version.

1. For Laptop version
   ![Laptop](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/sneakpeek.png)

2. For Tablet version
   ![Tablet](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/tabVersion.png)

3. For Mobile version
   ![Mobile](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/mobVersion.png)

## DEPLOY

Before deploying to a custom domain, I deployed my webpage using Netlify.

This is a sneak peek from my webpage.
![sneakpeek](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/sneakpeek.png)

This is the [link](https://week-5-eoa03.netlify.app) to my webpage using the Netlify domain.

And this is the [link](https://bobicraft.eoang.site) to my webpage using a custom domain.

### Process Deployment

#### Netlify

1. Go to [Netlify](https://www.netlify.com/). If you already have an account at Netlify, just log in. But if you don't have any accounts, sign up for Netlify.
   ![Netlify](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/netlify/1.PNG)

2. Click "add new site" to make a new deployment for the webpage you've done and import the files. You can import using github, gitlab, bitbucket, Azure DevOps, or drag and drop.
   ![Import files](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/netlify/2.PNG)

3. If you are using Github, select the repository for your files and deploy.
   ![Select repository](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/netlify/3.PNG)

4. Wait a few minutes. If it is already deployed, click "Change site name" to change your site name to what you want.
   ![Change site name](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/netlify/4.PNG)

5. Your site is already deployed using the Netlify domain.
   [![Netlify Status](https://api.netlify.com/api/v1/badges/a6261c09-1c96-43aa-a6f1-efa2f7002640/deploy-status)](https://app.netlify.com/sites/week-5-eoa03/deploys)

#### Custom Domain

Before you can deploy to a custom domain, you must have your own custom domain. I bought my custom domain using [Niagahoster](https://www.niagahoster.co.id/?ppc_campaign=google_search_brand&bidkw=niagahoster&gclid=CjwKCAjw5MOlBhBTEiwAAJ8e1nstWqaJxh1YHXGY1YKtZeI4HIkhK-U1e5tQdG7Jpc5Mrph7EcWcWxoCMOcQAvD_BwE).

1. Setting Nameservers
   
   Step 1:
   After you have your own domain, go to [Cloudflare](https://www.cloudflare.com/). If you already have an account, just log in. But if you don't have any accounts, sign up for Cloudflare.
   ![Cloudflare](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/cloudflare/1.PNG)

   Step 2:
   Register the domain name that you bought and click "Add site".
   ![Register domain](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/cloudflare/2.PNG)

   Step 3:
   Choose what packages you want to apply to your domain. I chose the free one.
   ![Choose package](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/cloudflare/3.PNG)

   Step 4:
   After you choose your package, the display will show the nameservers for you to change to your domain.
   ![Nameservers](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/cloudflare/4.PNG)

   Step 5:
   Change the nameservers of your domain. If you use Niagahoster to buy your domain, go to the member site, and your domain will appear there. Click "Kelola Layanan" or "Manage Services".
   ![Manage services](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/niagahoster/1.PNG)

   Step 6:
   Scroll down until you find "Overview Domain" and click "Ubah Nameserver" or "Change Nameserver". Change the nameservers to those from Cloudflare.
   ![Change nameservers](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/niagahoster/2.PNG)

   Step 7:
   Wait a few minutes until your domain is active. There will be a notification for you via email if your domain is already active.
   ![Domain active](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/cloudflare/5.PNG)

2. Deploy using a custom domain
   
   Step 1:
   After your domain is already active, click your domain at Cloudflare, and then go to DNS Records.
   ![DNS records](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/cloudflare/6.PNG)

   Step 2:
   Scroll down to DNS management and click "Add record". Set using any type of DNS from your domain or subdomain to your Netlify domain. I used a CNAME from the "bobicraft" subdomain to my Netlify domain.
   ![Set DNS](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/cloudflare/7.PNG)

   Step 3:
   Go to Netlify, click the "Domains" menu, and click "Add a domain".
   ![Add a domain](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/netlify/5.PNG)

   Step 4:
   Add the custom domain or subdomain you already set up with Cloudflare.
   ![Add custom domain](https://github.com/RevoU-FSSE-2/week-5-EOA03/blob/main/image/documentation/netlify/6.PNG)

After all the steps, your domain or subdomain is already deployed.
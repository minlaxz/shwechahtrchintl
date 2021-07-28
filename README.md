### shwechahtrchintl

Here is [Demo]('https://shwechahtrchintl.ml')

Serving github pages or static files on custom domain (free) with SSL/TLS (free) Cloudflare. 

In Myanmar language => ရွှေချထားချင်တယ်

### How I did?
1. Get a free domain from Freenom (used US fake address) to avoid technical issue of Freenom 😐
2. Update Cloudflare NS in Freenom (Freenom part is done close the tab 🤣)
3. Add Github custom domain ip as apex `A` records in Cloudflare DNS records.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Example -> `A ---- shwechahtrchintl.ml ---- 185.199.108.153`

Also if you want `www`, add `CNAME` record in Cloudflare

Example -> `CNAME ---- www.shwechahtrchintl.ml ---- shwechahtrchintl.ml`

4. Add `CNAME` file in this repo to point to `shwechahtrchintl.ml` domain
5. Activate github pages and enfroce HTTPS
6. Use full SSL/TLS in Cloudflare
7. That's all

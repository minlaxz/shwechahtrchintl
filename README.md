### shwechahtrchintl

Here is [Demo]('https://shwechahtrchintl.ml')

Serving github pages or static files on custom domain (free or not) with Cloudlare SSL/TLS (free). 

In Myanmar language => ရွှေချထားချင်တယ် <= [if you're curious about this 🤣]('https://translate.google.com/?sl=my&tl=en&text=%E1%80%9B%E1%80%BD%E1%80%BE%E1%80%B1%E1%80%81%E1%80%BB%E1%80%91%E1%80%AC%E1%80%B8%E1%80%81%E1%80%BB%E1%80%84%E1%80%BA%E1%80%90%E1%80%9A%E1%80%BA&op=translate')

### How I did?
- Get a free domain from Freenom (used US fake address) to avoid technical issue of Freenom 😐 
- Update Cloudflare NS in Freenom (Freenom part is done close the tab 🤣)
- Add Github custom domain ip as apex `A` records in Cloudflare DNS records.
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Example -> `A ---- shwechahtrchintl.ml ---- 185.199.108.153`

Also if you want `www`, add `CNAME` record in Cloudflare

Example -> `CNAME ---- www.shwechahtrchintl.ml ---- shwechahtrchintl.ml`

- Add [CNAME]('https://github.com/minlaxz/shwechahtrchintl/blob/f4724cf477ccaa79ca6ceb65e9c06e6c205d8579/CNAME#L1') file in the repo to point to `shwechahtrchintl.ml` domain
- Activate github pages and enfroce HTTPS
- Use full SSL/TLS in Cloudflare
- That's all

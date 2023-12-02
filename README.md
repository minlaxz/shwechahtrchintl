### shwechahtrchintl

This [shwechahtrchintl.gh.minlaxz.lol](https://shwechahtrchintl.gh.minlaxz.lol) is different from [hmm.gh.minlaxz.lol](https://hmm.gh.minlaxz.lol)

Why?
- hmm.gh.minlaxz.lol is hosted from the minlaxz.github.io repository (<user>.github.io)
- (<user>.github.io) is pretty easy just create a CNAME record on the DNS table (I am using Cloudflare)
- but for a project scope, like this one, it will be (hmm.gh.minlaxz.lol/project)
- And I seriously want for nothing like this project.gh.minlaxz.lol
- So I have to create CNAME (automatically created by GH) on the branch where static files live.
- Then update dns table like below

`A IP_ADDRESS domain`

Serving GitHub pages or static files on a custom domain (free or not) with Cloudflare SSL/TLS (free). 

In Myanmar language => ရွှေချထားချင်တယ် <= [if you're curious about this 🤣](https://translate.google.com/?sl=my&tl=en&text=%E1%80%9B%E1%80%BD%E1%80%BE%E1%80%B1%E1%80%81%E1%80%BB%E1%80%91%E1%80%AC%E1%80%B8%E1%80%81%E1%80%BB%E1%80%84%E1%80%BA%E1%80%90%E1%80%9A%E1%80%BA&op=translate)

### How did I do?
- ~Get a domain from Freenom (used a US fake address) to avoid "the technical issues" of Freenom 😐~
- Get a domain name, NameCheap is use to cheaper than others
- Update Cloudflare NS in Your Domain Provider (Domain name part is done close the tab 🤣)
- Add Github custom domain IP as `A` records in DNS records.
```
A 185.199.108.153 shwechahtrchintl.gh.minlaxz.lol DNS_ONYL
A 185.199.109.153 shwechahtrchintl.gh.minlaxz.lol DNS_ONYL
A 185.199.110.153 shwechahtrchintl.gh.minlaxz.lol DNS_ONYL
A 185.199.111.153 shwechahtrchintl.gh.minlaxz.lol DNS_ONYL
```

Also if you want `www`, add a `CNAME` record in Cloudflare

Example -> `CNAME ---- www.shwechahtrchintl.gh.minlaxz.lol ---- shwechahtrchintl.gh.minlaxz.lol`

- Activate GitHub pages and enforce HTTPS
- Use full SSL/TLS in Cloudflare (maybe)
- That's all

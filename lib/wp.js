import axios from 'axios'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  posts () {
    return axios.get(`${this.apiBase}/wp/v2/posts`, {
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }

  siteData () {
    return axios.get(this.apiBase)
      .then(json => {
        const { name, description, url, home, gmt_offset, timezone_string } = json.data
        return { site_data: { name, description, url, home, gmt_offset, timezone_string } }
      })
      .catch(e => ({ error: e }))
  }
}

const wp = new WpApi('http://cnotv.xyz')

export default wp

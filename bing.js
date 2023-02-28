;(async () => {
  const headers = $request.headers

  delete headers['user-agent']
  delete headers['sec-ch-ua-full-version']
  delete headers['sec-ch-ua-full-version-list']
  
  headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/110.0.1587.54 Version/16.0 Mobile/15E148 Safari/604.1$2'
  headers['sec-ch-ua'] = '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"'
  headers['sec-ch-ua-mobile'] = '?0'
  headers['sec-ch-ua-platform'] = 'macOS'

  $done({ headers })
})()

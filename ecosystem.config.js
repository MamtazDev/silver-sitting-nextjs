module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key:'key.pem',  
      user : 'ubuntu',
      host : '16.171.114.50',
      ref  : 'origin/main',
      repo : 'git@github.com:MamtazDev/silver-sitting-nextjs',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':'forwardAgent=yes'
    }
  }
};

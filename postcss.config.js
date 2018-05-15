module.exports = {
    plugins: [
        require('autoprefixer')({
                            browsers: ['last 2 versions', 'Android >= 4.0','iOS >= 8.0','last 5 QQAndroid versions','last 5 UCAndroid versions']
                        })
    ]
}
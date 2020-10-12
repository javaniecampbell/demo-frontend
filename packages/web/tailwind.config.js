module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true
    },
    purge: {
        layers: ['utilities'],
        content: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
        'public/**/*.html',
    ]},
    theme: {
        extend: {}
    },
    variants: {},
    plugins: []
};
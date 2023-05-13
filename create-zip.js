const AdmZip = require( 'adm-zip' );
const { sync: glob } = require( 'fast-glob' );
const path = require( 'path' );
const { dirname  } = path;

const name = path.basename(process.cwd());

console.log( `Creating archive for \`${ name }\` project... 🎁\n\n` );

const zip = new AdmZip();
let files = [];

// Add files/folder names that want in your project zip
files = glob(
    [
        // 'assets/**',
        'assets/dist/**',
        'assets/images/**',
        'build/**',
        'includes/**',
        'include/**',
        'languages/**',
        'public/**',
        `${ name }.php`,
        'functions.php',
        'uninstall.php',
        'changelog.*',
        'license.*',
        'readme.*',
    ],
    {
        caseSensitiveMatch: false,
    }
);

files.forEach( ( file ) => {
	console.log( `  Adding \`${ file }\`.\n` );
	const filesDir = dirname( file );
    const zipDir = filesDir !== '.' ? filesDir : '';
	
    zip.addLocalFile( file, name + '/' + zipDir );
} );

zip.writeZip( `./${ name }.zip` );
console.log( `\nDone. \`${ name }.zip\` is ready! 🎉\n` );

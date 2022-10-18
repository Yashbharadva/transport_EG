// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

console.log('arguments: ' + process.argv.slice(2));
if(process.argv.slice(2) == "production")
{
  process.env.BASE_URL = 'https://tms-api-contracting.transporteg.com';
  process.env.CP_LPP_BASE_URL = 'https://tms-api-contracting.transporteg.com';
  process.env.SEEKER_ACCOUNTS_URL = 'https://seeker-accounts.transporteg.com';
  process.env.PROVIDER_ACCOUNTS_URL = 'https://provider-accounts.transporteg.com';
  process.env.SEEKER_INDENT_URL = 'https://seeker-indenting.transporteg.com';
  process.env.PROVIDER_INDENT_URL = 'https://provider-indenting.transporteg.com';
  process.env.FILE_UPLOAD_BASE_URL = 'https://tms-api-contracting.transporteg.com';
  process.env.LCL_URL = 'https://lcl.transporteg.com';
  process.env.GOOGLE_API_KEY = 'AIzaSyDlbhYfDhrRPuCk4nTjb0qaOQG9-a56yS8';
  process.env.ACCOUNTS_BASE_URL = 'https://tms-api-accounts.transporteg.com';
  process.env.LCL_BASE_URL = 'https://lcl-api.transporteg.com';
  process.env.ADMIN_BASE_URL = 'https://teg-api-admin.transporteg.com';
  process.env.SSO_BASE_URL = 'https://prod-apis-auth.transporteg.com';
}
if(process.argv.slice(2) == "UAT") 
{
  process.env.BASE_URL = 'https://demo-apis-contracting.transporteg.com';
  process.env.CP_LPP_BASE_URL = 'https://demo-apis-contracting.transporteg.com';
  process.env.SEEKER_ACCOUNTS_URL = 'https://demo-accounts.transporteg.com';
  process.env.PROVIDER_ACCOUNTS_URL = 'https://demo-accounts.transporteg.com';
  process.env.SEEKER_INDENT_URL = 'https://demo-indenting.transporteg.com';
  process.env.PROVIDER_INDENT_URL = 'https://demo-indenting.transporteg.com';
  process.env.FILE_UPLOAD_BASE_URL = 'http://18.222.159.111:9000';
  process.env.LCL_URL = 'https://infra-test-lcl.transporteg.com'; 
  process.env.GOOGLE_API_KEY = 'AIzaSyCdwdm6vDZnZzagSdXU_YGa5It_stJZHeQ';
  process.env.ACCOUNTS_BASE_URL = 'https://demo-apis-accounts.transporteg.com';
  process.env.LCL_BASE_URL = 'https://infra-test-lcl-api.transporteg.com';
  process.env.ADMIN_BASE_URL = 'https://beta-api-admin.transporteg.com';
  process.env.SSO_BASE_URL = 'https://beta-apis-auth.transporteg.com';
}
if(process.argv.slice(2) == "QA") 
{
  process.env.BASE_URL = 'https://beta-apis-contracting.transporteg.com';
  process.env.CP_LPP_BASE_URL = 'https://beta-apis-contracting.transporteg.com';
  process.env.SEEKER_ACCOUNTS_URL = 'https://beta-accounts.transporteg.com';
  process.env.PROVIDER_ACCOUNTS_URL = 'https://beta-accounts.transporteg.com';
  process.env.SEEKER_INDENT_URL = 'https://beta-indenting.transporteg.com';
  process.env.PROVIDER_INDENT_URL = 'https://beta-indenting.transporteg.com';
  process.env.FILE_UPLOAD_BASE_URL = 'http://18.222.159.111:9000';
  process.env.LCL_URL = 'https://infra-test-lcl.transporteg.com'; 
  process.env.GOOGLE_API_KEY = 'AIzaSyDlbhYfDhrRPuCk4nTjb0qaOQG9-a56yS8';
  process.env.ACCOUNTS_BASE_URL = 'https://beta-apis-accounts.transporteg.com';
  process.env.LCL_BASE_URL = 'https://infra-test-lcl-api.transporteg.com';
  process.env.ADMIN_BASE_URL = 'https://beta-api-admin.transporteg.com';
  process.env.SSO_BASE_URL = 'https://beta-apis-auth.transporteg.com';
}
if(process.argv.slice(2) == "dev") 
{
  process.env.BASE_URL = 'https://dev-apis-contracting.transporteg.com';
  process.env.CP_LPP_BASE_URL = 'https://dev-apis-contracting.transporteg.com';
  process.env.SEEKER_ACCOUNTS_URL = 'https://dev-accounts.transporteg.com';
  process.env.PROVIDER_ACCOUNTS_URL = 'https://dev-accounts.transporteg.com';
  process.env.SEEKER_INDENT_URL = 'https://dev-indenting.transporteg.com';
  process.env.PROVIDER_INDENT_URL = 'https://dev-indenting.transporteg.com';
  process.env.FILE_UPLOAD_BASE_URL = 'http://18.222.159.111:9000';
  process.env.LCL_URL = 'https://infra-test-lcl.transporteg.com'; 
  process.env.GOOGLE_API_KEY = 'AIzaSyCdwdm6vDZnZzagSdXU_YGa5It_stJZHeQ';
  process.env.ACCOUNTS_BASE_URL = 'https://dev-apis-accounts.transporteg.com';
  process.env.LCL_BASE_URL = 'https://infra-test-lcl-api.transporteg.com';
  process.env.ADMIN_BASE_URL = 'https://beta-api-admin.transporteg.com';
  process.env.SSO_BASE_URL = 'https://dev-apis-auth.transporteg.com';
}

console.log('process.env.BASE_URL: ' + process.env.BASE_URL);
console.log('process.env.CP_LPP_BASE_URL: ' + process.env.CP_LPP_BASE_URL);
console.log('process.env.SEEKER_ACCOUNTS_URL: ' + process.env.SEEKER_ACCOUNTS_URL);
console.log('process.env.PROVIDER_ACCOUNTS_URL: ' + process.env.PROVIDER_ACCOUNTS_URL);
console.log('process.env.SEEKER_INDENT_URL: ' + process.env.SEEKER_INDENT_URL);
console.log('process.env.PROVIDER_INDENT_URL: ' + process.env.PROVIDER_INDENT_URL);
console.log('process.env.FILE_UPLOAD_BASE_URL: ' + process.env.FILE_UPLOAD_BASE_URL);
console.log('process.env.LCL_URL: ' + process.env.LCL_URL);
console.log('process.env.GOOGLE_API_KEY: ' + process.env.GOOGLE_API_KEY);

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// Ensure environment variables are read.
require("../config/env");

const path = require("path");
const chalk = require("chalk");
const fs = require("fs-extra");
const webpack = require("webpack");
// const webpush = require('web-push');
// const webpushKeys = webpush.generateVAPIDKeys();
// process.env.WEB_PRIVATE_KEY = webpushKeys.privateKey;
// process.env.WEB_PUBLIC_KEY = webpushKeys.publicKey;
const bfj = require("bfj");
const config = require("../config/webpack.config.prod");
const paths = require("../config/paths");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const printHostingInstructions = require("react-dev-utils/printHostingInstructions");
const FileSizeReporter = require("react-dev-utils/FileSizeReporter");
const printBuildError = require("react-dev-utils/printBuildError");

const measureFileSizesBeforeBuild =
  FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const useYarn = fs.existsSync(paths.yarnLockFile);

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// Process CLI arguments
const argv = process.argv.slice(2);
const writeStatsJson = argv.indexOf("--stats") !== -1;

// We require that you explictly set browsers and do not fall back to
// browserslist defaults.
const { checkBrowsers } = require("react-dev-utils/browsersHelper");
checkBrowsers(paths.appPath, isInteractive)
  .then(() => {
    // First, read the current file sizes in build directory.
    // This lets us display how much they changed later.
    return measureFileSizesBeforeBuild(paths.appBuild);
  })
  .then(previousFileSizes => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(paths.appBuild);
    // Merge with the public folder
    copyPublicFolder();
    // Start the webpack build
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow("Compiled with warnings.\n"));
        console.log(warnings.join("\n\n"));
        console.log(
          "\nSearch for the " +
            chalk.underline(chalk.yellow("keywords")) +
            " to learn more about each warning."
        );
        console.log(
          "To ignore, add " +
            chalk.cyan("// eslint-disable-next-line") +
            " to the line before.\n"
        );
      } else {
        console.log(chalk.green("Compiled successfully.\n"));
      }

      console.log("File sizes after gzip:\n");
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      );
      console.log();

      const appPackage = require(paths.appPackageJson);
      const publicUrl = paths.publicUrl;
      const publicPath = config.output.publicPath;
      const buildFolder = path.relative(process.cwd(), paths.appBuild);
      printHostingInstructions(
        appPackage,
        publicUrl,
        publicPath,
        buildFolder,
        useYarn
      );
    },
    err => {
      console.log(chalk.red("Failed to compile.\n"));
      printBuildError(err);
      process.exit(1);
    }
  )
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  console.log("Creating an optimized production build...");

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }
        messages = formatWebpackMessages({
          errors: [err.message],
          warnings: []
        });
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true })
        );
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join("\n\n")));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== "string" ||
          process.env.CI.toLowerCase() !== "false") &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            "\nTreating warnings as errors because process.env.CI = true.\n" +
              "Most CI servers set it automatically.\n"
          )
        );
        return reject(new Error(messages.warnings.join("\n\n")));
      }

      const resolveArgs = {
        stats,
        previousFileSizes,
        warnings: messages.warnings
      };
      if (writeStatsJson) {
        return bfj
          .write(paths.appBuild + "/bundle-stats.json", stats.toJson())
          .then(() => resolve(resolveArgs))
          .catch(error => reject(new Error(error)));
      }

      return resolve(resolveArgs);
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
}

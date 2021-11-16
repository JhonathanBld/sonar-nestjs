const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        options : {
            'sonar.login': 'a658d46d063b302be7d9103cd0712eec9b6a3bca',
            'sonar.tests':  'src',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'       
        }
    }, () => {});

    // sonar-scanner.bat -D"sonar.projectKey=tcc" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=a658d46d063b302be7d9103cd0712eec9b6a3bca"- PC
    // sonar-scanner.bat -D"sonar.projectKey=tcc-server" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=8d77caefaae0431fbbb8a6b381827c35fd560a16"

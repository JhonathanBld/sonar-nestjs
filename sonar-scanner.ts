import * as scanner from 'sonarqube-scanner'

const serverUrl = 'http://localhost:9000';
const token = 'bb8d5d2775ea3a2cd4ddbf80d56f8915340a94cb';
const projectKey = 'tcc';
const options = {
  
  'sonar.projectKey': projectKey,
  'sonar.projectName': 'trabalho',
  'sonar.sources': 'src',
  'sonar.tests': 'src',
  'sonar.language': 'ts',
  'sonar.test.inclusions':  'src/**/*.spec.ts, **src/**/*.spec.ts',
  'sonar.junit.lcov.reportPath' : 'junit.xml',
  'sonar.javascript.lcov.reportPaths' : 'coverage/lcov.info',
  'sonar.sourceEncoding': 'UTF-8'
};

// parameters for sonarqube-scanner
const params = {
  serverUrl,
  token,
  options
}

const sonarScanner = async () => {
  
  console.log(serverUrl);
  if (!serverUrl) {
    console.log('SonarQube url not set. Nothing to do...');
    return;
  }
  
  const callback  = (result) => {
    console.log('Sonarqube scanner result:', result);
  }
  
  scanner(params, callback);
}

sonarScanner().catch(err => console.error('Error during sonar scan', err));

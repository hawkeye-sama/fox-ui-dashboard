pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh ' sh "cd my-app && docker build -t react-ui:1.0 -f Dockerfile ."'
      }
    }

  }
}
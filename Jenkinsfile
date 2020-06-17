pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        dockerfile {
          filename 'my-app/Dockerfile'
        }

      }
      steps {
        sh 'ls'
        sh 'ls my-app'
      }
    }

    stage('sd') {
      steps {
        sh 'ls'
      }
    }

  }
}
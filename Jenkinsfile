pipeline {
  agent any
  stages {
    stage('Get Data') {
      steps {
        dir(path: 'my-app')
      }
    }

    stage('build via docker') {
      agent {
        dockerfile {
          filename 'Dockerfile'
        }

      }
      steps {
        echo '"test"'
      }
    }

  }
}
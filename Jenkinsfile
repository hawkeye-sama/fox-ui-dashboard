pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Get Data') {
      steps {
        dir(path: 'my-app') {
          sh 'cd my-app'
        }

      }
    }

  }
}
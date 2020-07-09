pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        script {
          checkout scm
        }

      }
    }

    stage('Environment') {
      steps {
        script {
          sh 'git --version'
          echo "Branch: ${env.BRANCH_NAME}"
          sh 'docker -v'
          sh 'printenv'
        }

      }
    }

    stage('Build Docker test') {
      steps {
        sh 'cd my-app && docker build -t react-test -f Dockerfile --no-cache .'
      }
    }

    stage('Deploy test') {
      steps {
        sh 'docker run -it -d -p 8085:8095 --rm react-test'
      }
    }

  }
}
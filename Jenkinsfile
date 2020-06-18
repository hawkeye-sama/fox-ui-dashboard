pipeline{
	agent any
	stages{
		stage('Checkout') {
		    steps{
			script{
			    checkout scm
			}
		     }
		    }
		stage('Install dependencies') {
		  steps {
		    script {
		      def dockerTool = tool name: 'docker', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
			       withEnv(["DOCKER=${dockerTool}/bin"]) {
				//stages
				//here we can trigger: sh "sudo ${DOCKER}/docker ..."
				} 
			    }
			}
		      }
		   stage('Environment') {
		       steps{
			   script{
			    sh 'git --version'
			    echo "Branch: ${env.BRANCH_NAME}"
			    sh 'docker -v'
			    sh 'printenv'
			   }
		       }
		     }
		    stage('Build Docker test'){
			steps{
			sh 'cd my-app && docker build -t react-test -f Dockerfile --no-cache .'
			}
		    }
		    stage('Docker test'){
		      steps{
		      sh 'docker run --rm react-test'
		      }
		    }
		    stage('Clean Docker test'){
		      steps{
		      sh 'docker rmi react-test'
		      }
		    }

	    }
}

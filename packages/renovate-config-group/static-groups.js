module.exports = {
  all: {
    description: 'Group all updates together',
    groupName: 'all dependencies',
    separateMajorMinor: false,
    groupSlug: 'all',
    packageRules: [
      {
        packagePatterns: ['*'],
        groupName: 'all dependencies',
        groupSlug: 'all',
      },
    ],
    lockFileMaintenance: {
      enabled: false,
    },
  },
  allNonMajor: {
    description: 'Group all minor and patch updates together',
    packageRules: [
      {
        packagePatterns: ['*'],
        minor: {
          groupName: 'all non-major dependencies',
          groupSlug: 'all-minor-patch',
        },
      },
    ],
  },
  recommended: {
    description:
      'Use curated list of recommended non-monorepo package groupings',
    extends: [
      'group:allApollographql',
      'group:fortawesome',
      'group:fusionjs',
      'group:polymer',
      'group:illuminate',
      'group:symfony',
      'group:socketio',
      'group:hibernateCore',
      'group:hibernateValidator',
      'group:hibernateOgm',
      'group:hibernateCommons',
      'group:rubyOmniauth',
      'group:springAmqp',
      'group:springAndroid',
      'group:springBatch',
      'group:springBoot',
      'group:springCloud',
      'group:springCore',
      'group:springData',
      'group:springHateoas',
      'group:springIntegration',
      'group:springKafka',
      'group:springLdap',
      'group:springMobile',
      'group:springOsgi',
      'group:springRestDocs',
      'group:springRoo',
      'group:springScala',
      'group:springSecurity',
      'group:springSession',
      'group:springShell',
      'group:springSocial',
      'group:springStatemachine',
      'group:springWebflow',
      'group:springWs',
    ],
    ignoreDeps: [],
  },
  allApollographql: {
    description: 'Group all packages published by Apollo GraphQL together',
    packageRules: [
      {
        extends: 'packages:apollographql',
        groupName: 'Apollo GraphQL packages',
      },
    ],
  },
  definitelyTyped: {
    description: 'Group all @types packages together',
    packageRules: [
      {
        groupName: 'definitelyTyped',
        packagePatterns: ['^@types/'],
      },
    ],
  },
  fortawesome: {
    description: 'Group all packages by Font Awesome together',
    packageRules: [
      {
        groupName: 'Font Awesome',
        packagePatterns: ['^@fortawesome/'],
      },
    ],
  },
  fusionjs: {
    description: 'Fusion.js packages',
    packageNames: [
      'fusion-cli',
      'fusion-core',
      'fusion-test-utils',
      'fusion-tokens',
    ],
    packagePatterns: ['^fusion-plugin-*', '^fusion-react*', '^fusion-apollo*'],
  },
  illuminate: {
    description: 'Group PHP illuminate packages together',
    packageRules: [
      {
        packagePatterns: ['^illuminate/'],
        groupName: 'illuminate packages',
        groupSlug: 'illuminate',
      },
    ],
  },
  symfony: {
    description: 'Group PHP symfony packages together',
    packageRules: [
      {
        packagePatterns: ['^symfony/'],
        groupName: 'symfony packages',
        groupSlug: 'symfony',
      },
    ],
  },
  polymer: {
    description: 'Group all @polymer packages together',
    packageRules: [
      {
        groupName: 'polymer packages',
        packagePatterns: ['^@polymer/'],
      },
    ],
  },
  hibernateCore: {
    description: 'Group Java Hibernate Core packages',
    packageRules: [
      {
        packagePatterns: ['^org.hibernate:'],
        groupName: 'hibernate core',
      },
    ],
  },
  hibernateValidator: {
    description: 'Group Java Hibernate Validator packages',
    packageRules: [
      {
        packagePatterns: ['^org.hibernate.validator:'],
        groupName: 'hibernate validator',
      },
    ],
  },
  hibernateOgm: {
    description: 'Group Java Hibernate OGM packages',
    packageRules: [
      {
        packagePatterns: ['^org.hibernate.ogm:'],
        groupName: 'hibernate ogm',
      },
    ],
  },
  hibernateCommons: {
    description: 'Group Java Hibernate Commons packages',
    packageRules: [
      {
        packagePatterns: ['^org.hibernate.common:'],
        groupName: 'hibernate commons',
      },
    ],
  },
  springAmqp: {
    description: 'Group Java Spring AMQP packages',
    packageRules: [
      {
        groupName: 'spring amqp',
        packagePatterns: ['^org.springframework.amqp:'],
      },
    ],
  },
  springAndroid: {
    description: 'Group Java Spring Android packages',
    packageRules: [
      {
        groupName: 'spring android',
        packagePatterns: ['^org.springframework.android:'],
      },
    ],
  },
  springBatch: {
    description: 'Group Java Spring Batch packages',
    packageRules: [
      {
        groupName: 'spring batch',
        packagePatterns: ['^org.springframework.batch:'],
      },
    ],
  },
  springBoot: {
    description: 'Group Java Spring Boot packages',
    packageRules: [
      {
        groupName: 'spring boot',
        packagePatterns: ['^org.springframework.boot:'],
      },
    ],
  },
  springCloud: {
    description: 'Group Java Spring Cloud packages',
    packageRules: [
      {
        groupName: 'spring cloud',
        packagePatterns: ['^org.springframework.cloud:'],
      },
    ],
  },
  springCore: {
    description: 'Group Java Spring Core packages',
    packageRules: [
      {
        groupName: 'spring core',
        packagePatterns: ['^org.springframework:'],
      },
    ],
  },
  springData: {
    description: 'Group Java Spring Data packages',
    packageRules: [
      {
        groupName: 'spring data',
        packagePatterns: ['^org.springframework.data:'],
      },
    ],
  },
  springHateoas: {
    description: 'Group Java Spring HATEOAS packages',
    packageRules: [
      {
        groupName: 'spring hateoas',
        packagePatterns: ['^org.springframework.hateoas:'],
      },
    ],
  },
  springIntegration: {
    description: 'Group Java Spring Integration packages',
    packageRules: [
      {
        groupName: 'spring integration',
        packagePatterns: ['^org.springframework.integration:'],
      },
    ],
  },
  springKafka: {
    description: 'Group Java Spring Kafka packages',
    packageRules: [
      {
        groupName: 'spring kafka',
        packagePatterns: ['^org.springframework.kafka:'],
      },
    ],
  },
  springLdap: {
    description: 'Group Java Spring LDAP packages',
    packageRules: [
      {
        groupName: 'spring ldap',
        packagePatterns: ['^org.springframework.ldap:'],
      },
    ],
  },
  springMobile: {
    description: 'Group Java Spring Mobile packages',
    packageRules: [
      {
        groupName: 'spring mobile',
        packagePatterns: ['^org.springframework.mobile:'],
      },
    ],
  },
  springOsgi: {
    description: 'Group Java Spring OSGi packages',
    packageRules: [
      {
        groupName: 'spring osgi',
        packagePatterns: ['^org.springframework.osgi:'],
      },
    ],
  },
  springRestDocs: {
    description: 'Group Java Spring REST Docs packages',
    packageRules: [
      {
        groupName: 'spring restdocs',
        packagePatterns: ['^org.springframework.restdocs:'],
      },
    ],
  },
  springRoo: {
    description: 'Group Java Spring Roo packages',
    packageRules: [
      {
        groupName: 'spring roo',
        packagePatterns: ['^org.springframework.roo:'],
      },
    ],
  },
  springScala: {
    description: 'Group Java Spring Scala packages',
    packageRules: [
      {
        groupName: 'spring scala',
        packagePatterns: ['^org.springframework.scala:'],
      },
    ],
  },
  springSecurity: {
    description: 'Group Java Spring Security packages',
    packageRules: [
      {
        groupName: 'spring security',
        packagePatterns: ['^org.springframework.security:'],
      },
    ],
  },
  springSession: {
    description: 'Group Java Spring Session packages',
    packageRules: [
      {
        groupName: 'spring session',
        packagePatterns: ['^org.springframework.session:'],
      },
    ],
  },
  springShell: {
    description: 'Group Java Spring Shell packages',
    packageRules: [
      {
        groupName: 'spring shell',
        packagePatterns: ['^org.springframework.shell:'],
      },
    ],
  },
  springSocial: {
    description: 'Group Java Spring Social packages',
    packageRules: [
      {
        groupName: 'spring social',
        packagePatterns: ['^org.springframework.social:'],
      },
    ],
  },
  springStatemachine: {
    description: 'Group Java Spring Statemachine packages',
    packageRules: [
      {
        groupName: 'spring statemachine',
        packagePatterns: ['^org.springframework.statemachine:'],
      },
    ],
  },
  springWebflow: {
    description: 'Group Java Spring WebFlow packages',
    packageRules: [
      {
        groupName: 'spring webflow',
        packagePatterns: ['^org.springframework.webflow:'],
      },
    ],
  },
  springWs: {
    description: 'Group Java Spring WS packages',
    packageRules: [
      {
        groupName: 'spring ws',
        packagePatterns: ['^org.springframework.ws:'],
      },
    ],
  },
  socketio: {
    description: 'Group socket.io packages',
    packageRules: [
      {
        groupName: 'socket.io packages',
        packagePatterns: ['^socket.io'],
      },
    ],
  },
  postcss: {
    description: 'Group postcss packages together',
    packageRules: [
      {
        extends: 'packages:postcss',
        groupName: 'postcss packages',
      },
    ],
  },
  rubyOmniauth: {
    description: 'Group omniauth packages together',
    packageRules: [
      {
        datasources: ['rubygems'],
        packagePatterns: ['^omniauth'],
        groupName: 'omniauth packages',
      },
    ],
  },
  linters: {
    description: 'Group various lint packages together',
    packageRules: [
      {
        extends: 'packages:linters',
        groupName: 'linters',
      },
    ],
  },
  jsUnitTest: {
    description: 'Group JS unit test packages together',
    packageRules: [
      {
        extends: 'packages:jsUnitTest',
        groupName: 'JS unit test packages',
      },
    ],
  },
  jsUnitTestNonMajor: {
    description: 'Group JS unit test packages together',
    packageRules: [
      {
        extends: 'packages:jsUnitTest',
        minor: {
          groupName: 'JS unit test packages',
        },
      },
    ],
  },
  unitTest: {
    description: 'Group all unit test packages together',
    packageRules: [
      {
        extends: 'packages:unitTest',
        groupName: 'unit test packages',
      },
    ],
  },
  unitTestNonMajor: {
    description: 'Group all unit test packages together',
    packageRules: [
      {
        extends: 'packages:unitTest',
        minor: {
          groupName: 'unit test packages',
        },
      },
    ],
  },
  jsTest: {
    description: 'Group JS test packages together',
    packageRules: [
      {
        extends: 'packages:jsTest',
        groupName: 'JS test packages',
      },
    ],
  },
  jsTestMonMajor: {
    description: 'Group non-major JS test package updates together',
    packageRules: [
      {
        extends: 'packages:jsTest',
        minor: {
          groupName: 'JS test packages',
        },
      },
    ],
  },
  test: {
    description: 'Group all test packages together',
    packageRules: [
      {
        extends: 'packages:test',
        groupName: 'test packages',
      },
    ],
  },
  testNonMajor: {
    description: 'Group all non-major test package updates together',
    packageRules: [
      {
        extends: 'packages:test',
        minor: {
          groupName: 'test packages',
        },
      },
    ],
  },
};

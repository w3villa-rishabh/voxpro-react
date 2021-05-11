export default [
  {
    index: 1,
    heading: 'About you and the work',
    question:
      'Do you provide your services through a limited company, partnership or unincorporated association?',
    p1: 'These are also known as intermediarie',
    p2:
      'An unincorporated association’ is an organisation set up by a group of people for a reason other than to make a profit. For example, a voluntary group or a sports club.',
    previous: 0,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: true,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 3
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 2
      }
    ]
  },
  {
    index: 2,
    options: []
  },
  {
    index: 3,
    heading: 'About you and the work',
    question: 'Have you already started working for this client?',
    p1: '',
    p2: '',
    previous: 1,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 4
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 5
      }
    ]
  },
  {
    index: 4,
    heading: 'Worker’s duties',
    question: 'Will you be an ‘Office Holder?',
    p1:
      'This can include being a board member, treasurer, trustee, company secretary or company director.',
    p2: 'Read more about Office Holders (opens in a new window).',
    previous: 3,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 6
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 7
      }
    ]
  },
  {
    index: 5,
    heading: 'Worker’s duties',
    question: 'Will you be an ‘Office Holder’?',
    p1:
      'This can include being a board member, treasurer, trustee, company secretary or company director.',
    p2: 'Read more about Office Holders (opens in a new window).',
    previous: 3,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 6
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 8
      }
    ]
  },
  {
    index: 6,
    message: 'your answer has been submitted',
    options: []
  },
  {
    index: 7,
    heading: 'Substitutes and helpers',
    question: 'Have you ever sent a substitute to do this work?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2: '',
    previous: 4,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes, your client accepted them',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 9
      },
      {
        name: 'Yes, but your client did not accept them',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 10
      },
      {
        name: 'Yes, but your client did not accept them',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 11
      }
    ]
  },
  {
    index: 8,
    heading: 'Substitutes and helpers',
    question: 'Does your client have the right to reject a substitute?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2:
      'This can include rejecting a substitute even if they are equally qualified, and meet your client’s interviewing, vetting and security clearance procedures',
    previous: 5,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 12
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 13
      }
    ]
  },
  {
    index: 9,
    heading: 'Substitutes and helpers',
    question: 'Did you pay your substitute?',
    p1: 'This includes payments made by you or your business.',
    p2: '',
    previous: 7,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 14
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 15
      }
    ]
  },
  {
    index: 10,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 7,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 16
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 16
      }
    ]
  },
  {
    index: 11,
    heading: 'Substitutes and helpers',
    question: 'Does your client have the right to reject a substitute?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2:
      'This can include rejecting a substitute even if they are equally qualified, and meet your client’s interviewing, vetting and security clearance procedures.',
    previous: 7,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 17
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 18
      }
    ]
  },
  {
    index: 12,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 8,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 19
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 19
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 19
      }
    ]
  },
  {
    index: 13,
    heading: 'Substitutes and helpers',
    question: 'Would you have to pay your substitute?',
    p1: 'This would include payments made by you or your business.',
    p2: '',
    previous: 8,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 20
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 20
      }
    ]
  },
  {
    index: 14,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 9,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 21
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 21
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 21
      }
    ]
  },
  {
    index: 15,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 9,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 22
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 22
      }
    ]
  },
  {
    index: 16,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 10,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 23
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 23
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 23
      }
    ]
  },
  {
    index: 17,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 11,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 24
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 24
      }
    ]
  },
  {
    index: 18,
    heading: 'Substitutes and helpers',
    question: 'Would you have to pay your substitute?',
    p1: 'This would include payments made by you or your business.',
    p2: '',
    previous: 11,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 25
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 26
      }
    ]
  },
  {
    index: 19,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 12,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      }
    ]
  },
  {
    index: 20,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 13,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 28
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 28
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 28
      }
    ]
  },
  {
    index: 21,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 14,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      }
    ]
  },
  {
    index: 22,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 15,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 30
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 30
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 30
      }
    ]
  },
  {
    index: 23,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 16,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      }
    ]
  },
  {
    index: 24,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 17,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 32
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 32
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 32
      }
    ]
  },
  {
    index: 25,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 18,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 33
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 33
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 33
      }
    ]
  },
  {
    index: 26,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 18,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 34
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 34
      }
    ]
  },
  {
    index: 27,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 19,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      }
    ]
  },
  {
    index: 28,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 20,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      }
    ]
  },
  {
    index: 29,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 21,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      }
    ]
  },
  {
    index: 30,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 22,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      }
    ]
  },
  {
    index: 31,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 23,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      }
    ]
  },
  {
    index: 32,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 24,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      }
    ]
  },
  {
    index: 33,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 25,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      }
    ]
  },
  {
    index: 34,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 26,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 42
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 42
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 42
      }
    ]
  },
  {
    index: 35,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 27,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      }
    ]
  },
  {
    index: 36,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 28,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      }
    ]
  },
  {
    index: 37,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 29,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      }
    ]
  },
  {
    index: 38,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 30,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      }
    ]
  },
  {
    index: 39,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 31,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      }
    ]
  },
  {
    index: 40,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 32,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      }
    ]
  },
  {
    index: 41,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 33,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      }
    ]
  },
  {
    index: 42,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 34,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      }
    ]
  },
  {
    index: 43,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 35,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 51
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 51
      }
    ]
  },
  {
    index: 44,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 36,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      }
    ]
  },
  {
    index: 45,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 37,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 53
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 53
      }
    ]
  },
  {
    index: 46,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 38,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      }
    ]
  },
  {
    index: 47,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 39,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 55
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 55
      }
    ]
  },
  {
    index: 48,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 40,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      }
    ]
  },
  {
    index: 49,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 41,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      }
    ]
  },
  {
    index: 50,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 42,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      }
    ]
  },
  {
    index: 51,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    previous: 43,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 59
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 59
      }
    ]
  },
  {
    index: 52,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 44,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 60
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 60
      }
    ]
  },
  {
    index: 53,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    previous: 45,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 61
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 61
      }
    ]
  },
  {
    index: 54,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 46,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 62
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 62
      }
    ]
  },
  {
    index: 55,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    previous: 47,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 63
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 63
      }
    ]
  },
  {
    index: 56,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 48,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 64
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 64
      }
    ]
  },
  {
    index: 57,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 49,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 65
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 65
      }
    ]
  },
  {
    index: 58,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 50,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      }
    ]
  },
  {
    index: 59,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 51,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 67
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 67
      }
    ]
  },
  {
    index: 60,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 52,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 68
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 68
      }
    ]
  },
  {
    index: 61,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 53,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 69
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 69
      }
    ]
  },
  {
    index: 62,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 54,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 70
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 70
      }
    ]
  },
  {
    index: 63,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 55,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 71
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 71
      }
    ]
  },
  {
    index: 64,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 56,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 72
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 72
      }
    ]
  },
  {
    index: 65,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 57,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 73
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 73
      }
    ]
  },
  {
    index: 66,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 58,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 74
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 74
      }
    ]
  },
  {
    index: 67,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 59,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 75
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 75
      }
    ]
  },
  {
    index: 68,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 60,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 76
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 76
      }
    ]
  },
  {
    index: 69,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 61,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 77
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 77
      }
    ]
  },
  {
    index: 70,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 62,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 78
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 78
      }
    ]
  },
  {
    index: 71,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 63,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 79
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 79
      }
    ]
  },
  {
    index: 72,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 64,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 80
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 80
      }
    ]
  },
  {
    index: 73,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 65,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 81
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 81
      }
    ]
  },
  {
    index: 74,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 66,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 82
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 82
      }
    ]
  },
  {
    index: 75,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 67,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 83
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 83
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        checked: false,
        next: 83
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        checked: false,
        next: 83
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        checked: false,
        next: 83
      }
    ]
  },
  {
    index: 76,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 68,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 84
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 84
      }
    ]
  },
  {
    index: 77,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 69,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 83
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 83
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        checked: false,
        next: 83
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        checked: false,
        next: 83
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        checked: false,
        next: 83
      }
    ]
  },

  {
    index: 83,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 72,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 91
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 91
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        checked: false,
        next: 91
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        checked: false,
        next: 91
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        checked: false,
        next: 91
      }
    ]
  },
  {
    index: 84,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 76,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        checked: false,
        next: 92
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        checked: false,
        next: 92
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        checked: false,
        next: 92
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        checked: false,
        next: 92
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        checked: false,
        next: 92
      }
    ]
  }
];

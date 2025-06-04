const awsServices = [
  {
    id: "ec2",
    name: "Amazon EC2",
    children: [
      {
        id: "instances",
        name: "Instances",
        children: [
          { id: "security-groups", name: "Security Groups" },
          { id: "key-pairs", name: "Key Pairs" },
          { id: "elastic-ips", name: "Elastic IPs" },
        ],
      },
      { id: "volumes", name: "EBS Volumes" },
      { id: "amis", name: "AMIs" },
    ],
  },
  {
    id: "s3",
    name: "Amazon S3",
    children: [
      {
        id: "buckets",
        name: "Buckets",
        children: [
          { id: "bucket-policies", name: "Bucket Policies" },
          { id: "access-control", name: "Access Control Lists" },
          { id: "versioning", name: "Versioning" },
        ],
      },
    ],
  },
  {
    id: "iam",
    name: "AWS IAM",
    children: [
      {
        id: "users",
        name: "Users",
        children: [
          { id: "user-policies", name: "Inline Policies" },
          { id: "mfa", name: "MFA Devices" },
        ],
      },
      {
        id: "roles",
        name: "Roles",
        children: [
          { id: "trust-policy", name: "Trust Policies" },
          { id: "permissions", name: "Attached Policies" },
        ],
      },
      { id: "groups", name: "Groups" },
      { id: "policies", name: "Managed Policies" },
    ],
  },
  {
    id: "rds",
    name: "Amazon RDS",
    children: [
      {
        id: "databases",
        name: "Databases",
        children: [
          { id: "snapshots", name: "Snapshots" },
          { id: "subnet-groups", name: "Subnet Groups" },
        ],
      },
      { id: "parameter-groups", name: "Parameter Groups" },
    ],
  },
  {
    id: "lambda",
    name: "AWS Lambda",
    children: [
      {
        id: "functions",
        name: "Functions",
        children: [
          { id: "triggers", name: "Triggers" },
          { id: "layers", name: "Layers" },
          { id: "env-vars", name: "Environment Variables" },
        ],
      },
    ],
  },
  {
    id: "cloudfront",
    name: "Amazon CloudFront",
    children: [
      {
        id: "distributions",
        name: "Distributions",
        children: [
          { id: "origins", name: "Origins" },
          { id: "behaviors", name: "Cache Behaviors" },
          { id: "ssl", name: "SSL Certificates" },
        ],
      },
    ],
  },
];

export default awsServices;

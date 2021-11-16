def define_env(env):
  "Hook function"

  # parameters are:
  # address: the address prefix
  # domain: the email domain, using "consensys.net" as default if not provided.
  @env.macro
  def email(address:str, domain:str="consensys.net"):
    return 'Send email at [{address}@{domain}](mailto:{address}@{domain})'.format(address=address, domain=domain)

  # This is a demo filter that you can define for all your site
  @env.filter
  def cli_to_env(name):
    name.replace("-", "_")
    return name.capitalize()

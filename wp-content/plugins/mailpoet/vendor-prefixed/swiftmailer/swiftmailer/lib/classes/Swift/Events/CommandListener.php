<?php
namespace MailPoetVendor;
if (!defined('ABSPATH')) exit;
interface Swift_Events_CommandListener extends Swift_Events_EventListener
{
 public function commandSent(Swift_Events_CommandEvent $evt);
}

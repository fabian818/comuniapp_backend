module Facebook
	APP_ID = '1529170704051872'
	SECRET = 'afefc72e14c69a4991fd1d4e3e77ca83'
end


Koala::Facebook::OAuth.class_eval do
	def initialize_with_default_settings(*args)
		case args.size
		when 0, 1
			raise "application id and/or secret are not specified in the config" unless Facebook::APP_ID && Facebook::SECRET
			initialize_without_default_settings(Facebook::APP_ID.to_s, Facebook::SECRET.to_s, args.first)
		when 2, 3
			initialize_without_default_settings(*args) 
		end
	end 

	alias_method_chain :initialize, :default_settings 
end